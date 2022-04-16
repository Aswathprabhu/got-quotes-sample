import { createServer, Factory, Model, RestSerializer } from 'miragejs';
import getRoutes from './routes';

const isTestEnv = (env) => env === 'test';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    models: {
      quote: Model,
    },
    factories: {
      quote: Factory.extend({
        sentence: 'The man who passes the sentence should swing the sword.',
        character: {
          name: 'Eddard "Ned" Stark',
          slug: 'ned',
          house: {
            name: 'House Stark of Winterfell',
            slug: 'stark',
          },
        },
      }),
    },
    seeds(server) {
      server.createList('quote', 20);
    },
    routes() {
      this.passthrough('https://game-of-thrones-quotes.herokuapp.com/**');
      this.urlPrefix = 'https://game-of-thrones-quotes.herokuapp.com';
      this.namespace = '/v1';
      isTestEnv(environment) && getRoutes.bind(this)();
    },
    serializers: {
      application: RestSerializer.extend({
        // https://miragejs.com/api/classes/serializer/#embed
        embed: true,
        // https://miragejs.com/api/classes/serializer/#root
        root: false,
      }),
    },
  });
}
