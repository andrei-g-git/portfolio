import * as React from 'react';
import { connect } from 'react-redux';
import { toggledShowcaseModal} from '../../redux/actions';

export const withPageState = (
    WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapPageState, {})(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/> 
            );
        });
}

const mapPageState = (state: any) => {
    return{
        page: state.ui.highlightedNavItem
    }
};

//--------------------------------------------------------------------

export const withThemeState = ( // DRY!!!!!!!
    WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapThemeState, {})(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/> 
            );
        });
}

const mapThemeState = (state: any) => {
    return{
        darkTheme: state.ui.darkTheme
    }
};

//doesn't work, it doesn't see it as a valid component
// export const withModalState = (WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>) => {
//     return connectWrappedComponent(WrappedComponent);
// }

export const withModalState = ( // DRY!!!!!!!
    WrappedComponent: | typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>,
) => {
    return connect(mapModalState, mapModalDispatch)(
        (props: any): JSX.Element => {
            return (
                <WrappedComponent {...props}/> 
            );
        });
}

const mapModalState = (state: any) => {
    return{
        selectedItems: state.ui.selectedItems
    }
};

const mapModalDispatch = (dispatch: any) => {
    return{
		toggleModal: (isVisible: boolean) => {
			dispatch(toggledShowcaseModal(isVisible));
		}
    }
}

const connectWrappedComponent = (WrappedComponent: typeof React.Component | React.ComponentClass<any> | React.FunctionComponent<any>): Function => {
    return () => {
        return connect(mapModalState, mapModalDispatch)(
            (props: any): JSX.Element => {
                return (
                    <WrappedComponent {...props}/> 
                );
            });        
    }
}
