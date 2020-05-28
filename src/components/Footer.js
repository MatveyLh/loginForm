import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.items.map(item => {
            if (item.avatar === null) {
                item.avatar = "http://itstrana.vh118.hosterby.com/teleworking/media/files/Lan_pictures/images_6Kssevq.png"
            }
            return <div className={'footer-wrapper'}><img src={item.avatar}/></div>
        });
        return (
            <div className={'content-footer'}>
                {list}
            </div>
        )
    }
}

export default Footer;