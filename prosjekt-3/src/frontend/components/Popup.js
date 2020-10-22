import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import React from 'react'



export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup } = props;
    return (
        <div>
            <Dialog open={openPopup} maxWidth="md">
                <DialogTitle>
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ flexGrow: 1 }} variant="h6" component="div">{title}</Typography>
                        <button
                            text="X"
                            onClick={() => { setOpenPopup(false) }}>x
                        </button>

                    </div>
                </DialogTitle>
                <DialogContent dividers>
                    {children}
                </DialogContent>
            </Dialog>

        </div >
    )
}


