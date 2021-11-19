type CredentialsConfiguration = {
    mediaStack: {
        readonly accessKey: string;
    }
};

type ServerConfiguration = {
    readonly port: Number;
};

class AppConfiguration {
    // the HTTP port to listen on
    public readonly server: ServerConfiguration = {
        port: Number(process.env.PORT),
    };

    // integration credentials
    public readonly credentials: CredentialsConfiguration = {
        mediaStack: {
            accessKey: process.env.MEDIASTACK_ACCESS_KEY,
        },
    };

    // validation that will run before the configuration is returned
    public validate(): void {
        if (this.server.port <= 0) {
            throw new Error(`Invalid server port: ${this.server.port}.`);
        }

        if (!this.credentials.mediaStack.accessKey) {
            throw new Error('MediaStack access key was not provided. Please use MEDIASTACK_ACCESS_KEY environment variable to provide this key.');
        }
    }
}

export default () => {
    const config = new AppConfiguration();

    config.validate();

    return config;
}
