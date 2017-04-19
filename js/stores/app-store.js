import Actions from '../actions';
import Store from '../lib/store';
import find from 'lodash/find';
import Dispatcher from '../dispatcher-inst';
import mc from './send_to_mailchimp.js';

class AppStore extends Store {

    constructor() {
        super('AppStore');
        this.logger.debug('Initializing AppStore');

        this.initialize( 'contact', [
          { firstName: 'First' },
          { lastName: 'Last' },
          { email: 'Email' }
        ]);

        //this.initialize('route', this.getNavigationRoute(window.location.hash.substr(1)));
        this.initialize('route', 'home');
        this.initialize('placeholder', 'Enter Email');
        this.initialize( 'email', '' );
    }

    onAction(actionType, data) {
        this.logger.debug(`Received Action ${actionType} with data`, data);
        switch (actionType) {

            case 'NAVIGATE':
                let newRoute = this.getNavigationRoute(data.location);
                if (newRoute !== this.get('route')) {
                    this.set('route', newRoute);
                    window.location.hash = `#${newRoute}`;
                }
                break;

            case 'SUBMIT_EMAIL':
                //alert( data.email + ' address submitted!');
                mc.sendToMailChimp2( data.email );
                break;

            default:
                this.logger.debug('Unknown actionType for this store - ignoring');
                break;
        }
    }

    getNavigationRoute(route) {
        let newRoute = find(this.get('pages'), path => { return path.name === route.toLowerCase(); });
        if (!newRoute) {
            newRoute = find(this.get('pages'), path => { return path.default && path.default === true; });
            console.log("newRoute: " + newRoute );
        }
        return newRoute.name || '';
    }
}

var appStore = new AppStore();
Dispatcher.registerStore(appStore);

export default appStore;