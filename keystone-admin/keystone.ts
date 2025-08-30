import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
    config({
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',
        },
        lists,
        session,
        storage: {
            my_local_images: {
                kind: 'local',
                type: 'image',
                generateUrl: (path: string) => `/images${path}`,
                serverRoute: {
                    path: '/images',
                },
                storagePath: 'public/images',
            },
        },
        graphql: {
            path: '/admin/api/graphql',
            playground: true,
        },
        ui: {
            basePath: '/admin',
        },
    })
);
