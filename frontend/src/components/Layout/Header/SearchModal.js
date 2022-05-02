import React, { useState, useEffect } from 'react';

import closeIcon from "../../../assets/img/icon/close.png"

const SearchModal = () => {

    const searchModalRemove = () => {
        document.body.classList.remove('modal-open');
    };

    return (
        <React.Fragment>
            <div className="search-modal">
                <div onClick={searchModalRemove} className="close">
                    <span>
                        <img src={closeIcon} alt="Close" />
                    </span>
                </div>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="search-block clearfix">
                            <form>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Search Here..." type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchModal;