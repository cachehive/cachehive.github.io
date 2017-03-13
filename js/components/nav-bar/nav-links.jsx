import React from 'react';
//import Actions from '../actions';

class NavLinks extends React.Component {

    onClick(route) {
        Actions.navigate(route);
    }

    render() {

        let visibleLinks = this.props.pages.filter(page => {
            return (page.nav === true && page.auth === false);
        });
        let linkComponents = visibleLinks.map(page => {
            let cssClass = (page.name === this.props.route) ? 'link active' : 'link';
             
            return (<li className={cssClass} key={page.name} onClick={handler}>{page.title}</li>);
            });

        return (
            <div className="_navlinks">
                <ul>{linkComponents}</ul>
            </div>
        );
    }
}

/*
NavLinks.propTypes = {
    pages: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                auth: React.PropTypes.bool,
                nav: React.PropTypes.bool,
                name: React.PropTypes.string.isRequired,
                title: React.PropTypes.string.isRequired
            })
        ).isRequired,
    route: React.PropTypes.string.isRequired
};
*/ 
export default NavLinks;``