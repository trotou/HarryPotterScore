import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Img } from "../Students/styles";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  DialogStudents,
  DivStudentHouse,
  IconQuill,
  ImageHouse,
  ImageStudent,
  useStyles,
} from "./styles";
import { useDispatch } from "react-redux";
import {
  addHousePointsThunks,
  removeHousePointsThunks,
} from "../../store/modules/housePoints/thunks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function FormDialog(id) {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    points: yup
      .number("Precisa ser um número")
      .typeError("Precisa especificar um número")
      .positive("precisa ser positivo")
      .integer("precisa ser inteiro")
      .required("campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState("");
  const requestStudent = async () => {
    return await axios
      .get("https://hp-api.herokuapp.com/api/characters/students")
      .then((resp) => setStudent(resp.data[id["id"]]));
  };

  const handleClickOpen = () => {
    setOpen(true);
    requestStudent();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseGain = (i, num) => {
    dispatch(addHousePointsThunks(i, num));
    handleClose();
  };

  const handleCloseLost = (i, num) => {
    dispatch(removeHousePointsThunks(i, num));
    handleClose();
  };

  const classes = useStyles();

  return (
    <div>
      <IconQuill variant="outlined" onClick={handleClickOpen}>
        <Img alt="unloaded" src={"./images/quill.svg"} />
      </IconQuill>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <DialogStudents
            open={open}
            onClose={handleClose}
            className={classes.dialogroot}
          >
            <div className={classes.dialog}>
              <DivStudentHouse>
                <ImageStudent alt="unloaded" src={student.image} />

                <ImageHouse
                  alt="unloaded"
                  src={`./images/${student.house}.png`}
                />
              </DivStudentHouse>

              <DialogContent className={classes.root}>
                <DialogTitle
                  disableTypography
                  className={classes.title}
                  id="form-dialog-title"
                >
                  {student.name}
                </DialogTitle>

                <TextField
                  className={classes.textfield}
                  autoFocus
                  variant="filled"
                  margin="dense"
                  name="points"
                  label="Pontos"
                  inputRef={register}
                  error={!!errors.points}
                  helperText={errors.points?.message}
                  onChange={(e) => setValue(e.target.value)}
                />
              </DialogContent>

              <DialogActions className={classes.actions}>
                <Button
                  type="submit"
                  className={classes.buttonLost}
                  onClick={handleSubmit(() => handleCloseLost(student, value))}
                >
                  Lost
                </Button>
                <Button
                  type="submit"
                  className={classes.buttonGain}
                  onClick={handleSubmit(() => handleCloseGain(student, value))}
                >
                  Gain
                </Button>
              </DialogActions>
            </div>
          </DialogStudents>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
