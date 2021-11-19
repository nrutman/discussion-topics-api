import {NextFunction, Request, Response} from "express";
import AppConfiguration from "../config/AppConfiguration";
import {NewsArticle, Topic, TopicType} from "../topic/type";
import client from "../http/client";

const http = client;

export default async (request: Request, response: Response, next: NextFunction) => {
    const newsResponse = await http.get('http://api.mediastack.com/v1/news', {
        params: {
            access_key: AppConfiguration().credentials.mediaStack.accessKey,
            languages: 'en',
            sort: 'popularity',
        },
    });

    const newsTopics = newsResponse.data.data.map((news: NewsArticle) => {
        const topic: Topic = {
            description: news.description,
            id: news.url,
            published: new Date(news.published_at),
            source: news.source,
            title: news.title,
            type: TopicType.News,
            url: news.url,
        };

        return topic;
    })

    response.status(200).json(newsTopics);
}
