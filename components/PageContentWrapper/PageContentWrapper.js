import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import styles from "./pageContentWrapper.module.scss";

const PageContentWrapper = ({children}) => {
    const dispatch = useDispatch();

    const wrapperRef = useRef();

    const authenticatedLayoutMode = useSelector((state) => state.authenticatedLayoutMode);

    useEffect(() => {
        dispatch({type: "setAuthenticatedLayoutMode", payload: "default"});
    }, [])
    
    useEffect(() => {
        if(wrapperRef && wrapperRef.current) {
            if(authenticatedLayoutMode === "fullSize") {
                if(wrapperRef.current) {
                    wrapperRef.current.classList.add(styles.hide);
                    setTimeout(() => {
                        if(wrapperRef && wrapperRef.current) {
                            wrapperRef.current.classList.add(styles.displayNone);
                        }
                     }, 400)
               }
            } else {
                if(wrapperRef.current && wrapperRef.current != null) {
                    setTimeout(() => {
                        if(wrapperRef && wrapperRef.current) {
                            wrapperRef.current.classList.remove(styles.displayNone);
                        }
                    }, 50)

                    setTimeout(() => {
                        if(wrapperRef && wrapperRef.current) {
                            wrapperRef.current.classList.remove(styles.hide);
                        }
                    }, 400)
                }
            }
        }
        console.log('2',authenticatedLayoutMode);
    }, [authenticatedLayoutMode])

  return (
    <div ref={wrapperRef}  className={styles.container}>
        {children}
    </div>
  )
}

export default PageContentWrapper