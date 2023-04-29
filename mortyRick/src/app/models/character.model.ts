export class Character{
    /*The identifier for this resource.*/
    public id?: number;
    
    /*The name for this resource. */
    public name?: string;

    public status?: string;

    public species?: string;

    public type?: string;
    
    public gender?: string;
    
    public origin?: {

        name?: string;

        url?: string;

    };

    public location?: {
        
        name?: string;

        url?: string;

    };

    public episode?: string[];
    
    public url?: string;

    public created?: string;
}