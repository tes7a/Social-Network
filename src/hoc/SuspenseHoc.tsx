import { ComponentType, Suspense } from 'react';

export const SuspenseHoc = (Component: ComponentType) => {
    return ( props: any ) => {
      return <Suspense fallback={ <div>Loading...</div> }>
            <Component {...props}/>
        </Suspense>
    } 
}