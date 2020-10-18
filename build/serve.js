import browserSync from 'browser-sync';
import paths from '../mconfig.json';

export const server = browserSync.create();

function serve(done) {
    server.init({
        notify: false,
        // for local development use server
        server: {
            baseDir: paths.dest
        },
        // comment out the server object above and uncomment below when using a cms
        // proxy: paths.url,
        // host: paths.url,
        // open: 'external'
    });
    done();
}

export default serve;
