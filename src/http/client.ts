import {setup} from "axios-cache-adapter";

const client = setup({
    cache: {
        exclude: {
            query: false,
        },
        maxAge: 3 * 60 * 60 * 1000, // 3 hours
    }
});

export default client;
