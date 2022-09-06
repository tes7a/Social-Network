import { ComponentType, Suspense } from 'react';

export const SuspenseHoc = <T extends unknown>(Component: ComponentType) => {
    return ( props: any ) => {
      return <Suspense fallback={ <div>Loading...</div> }>
            <Component {...props}/>
        </Suspense>
    } 
}