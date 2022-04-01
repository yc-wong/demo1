import {IRouterPlugin, IRouterRequest, IRouterResponse, ISession} from '@ijstech/plugin';

class Router implements IRouterPlugin{
    async route(session: ISession, request: IRouterRequest, response: IRouterResponse): Promise<boolean> {        
        //implement router logic here
        response.end('hello from Demo 1')
        return true;    
    }
}
export default Router;
