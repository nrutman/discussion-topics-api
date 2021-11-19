export enum TopicType {
    News = 'news',
}

export type Topic = {
    description: string|null;
    id: string;
    published: Date;
    source: string;
    title: string;
    type: TopicType;
    url: string;
};

export type NewsArticle = {
    author: string|null;
    category: string;
    country: string;
    description: string;
    image: string|null;
    language: string;
    published_at: string;
    source: string;
    title: string;
    url: string;
};
