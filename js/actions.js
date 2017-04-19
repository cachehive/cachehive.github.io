import Dispatcher from './dispatcher-inst';


export default class Actions {
    
    static navigate(newRoute) {
        Dispatcher.dispatch('NAVIGATE', { location: newRoute });
    }

    static submitEmail(email) {
        Dispatcher.dispatch('SUBMIT_EMAIL', { email: email });
    }
}