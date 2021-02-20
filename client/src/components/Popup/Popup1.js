import React, { useEffect,useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Input, TextArea, FormBtn } from "../Form";
import API from "../../utils/API";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const [posts, setPosts] = useState({})
    const [open, setOpen] = React.useState(false);
    const fullWidth = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const [formObject, setFormObject] = useState({})
    useEffect(() => {
        loadPosts()
    }, [])
    //Loads all books and sets them to books
    function loadPosts() {
        API.getPosts()
            .then(res =>
                setPosts(res.data)
            )
            .catch(err => console.log(err));
    };
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.savePost({
                title: formObject.title,
                username: formObject.username,
                body: formObject.body,
                bettingPoint: formObject.bettingPoint
            })
                .then(res => handleClose())
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <Button type="button" class="btn" style={{ color: "#b7a57a", backgroundColor: "#4b2e83" }} onClick={handleClickOpen}>
                Creat a Match
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={fullWidth}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title">{"Wanna go 1 V 1?"}</DialogTitle>
                <DialogContent>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="username"
                            placeholder="User_ID (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="bettingPoint"
                            type="number"
                            placeholder="Bet Points (required)"
                        />
                        <TextArea
                            onChange={handleInputChange}
                            name="body"
                            placeholder="Description of the Match, Please include your in-game ID and avalibility of the match(required)"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <FormBtn onClick={handleFormSubmit} color="primary">
                        Let's Bet
            </FormBtn>
                </DialogActions>
            </Dialog>
        </div>
    );
}
