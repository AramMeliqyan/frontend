import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material"
import { useState, useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EventContext } from "../lib/Context";
import { ActionTypes, IEvent } from "../lib/types";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface EditEventProps {
  event: IEvent;
}

interface Inputs {
  title: string;
  date: string;
  time: string;
  cover: string;
  type: string;
  composer: string;
}

export const EditEvent: React.FC<EditEventProps> = ({ event }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { register, handleSubmit, setValue } = useForm<Inputs>();
  const context = useContext(EventContext);

  useEffect(() => {
    if (open) {
      setValue("title", event.title || ''); 
      setValue("date", event.date || ''); 
      setValue("time", event.time || ''); 
      setValue("cover", event.cover || ''); 
      setValue("type", event.type  || ''); 
      setValue("composer", event.composer || ''); 
    }
  }, [open, event, setValue]);

  const handleEdit: SubmitHandler<Inputs> = async (data) => {
    const updatedEvent = { ...event, ...data };
    try {
      await axios.put(`http://localhost:3004/events/${event.id}`, updatedEvent);
      context?.dispatch({ type: ActionTypes.updateEvent, payload: updatedEvent });
      setOpen(false);
    } catch (error) {
      console.error("Failed to update event", error);
    }
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)} variant="contained">Edit</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form onSubmit={handleSubmit(handleEdit)}>
            <Box my={2}>
              <TextField
                variant="outlined"
                label="Title"
                {...register("title", { required: true })}
                defaultValue={event.title || ''}
              />
            </Box>
            <Box my={2}>
              <TextField
                variant="outlined"
                label="Date"
                {...register("date", { required: true })}
                defaultValue={event.date || ''}
              />
            </Box>
            <Box my={2}>
              <TextField
                variant="outlined"
                label="Time"
                {...register("time", { required: true })}
                defaultValue={event.time || ''}
              />
            </Box>
            <Box my={2}>
              <TextField
                variant="outlined"
                label="Composer"
                {...register("composer", { required: true })}
                defaultValue={event.composer || ''}
              />
            </Box>
            <Box my={2}>
              <Select sx={{ width: 200 }} {...register("type", { required: true })} defaultValue={event.type || ''}>
                <MenuItem value="opera">Opera</MenuItem>
                <MenuItem value="ballet">Ballet</MenuItem>
              </Select>
            </Box>
            <Box my={2}>
              <TextField
                variant="outlined"
                label="Cover"
                {...register("cover", { required: true })}
                defaultValue={event.cover || ''}
              />
            </Box>
            <Button type="submit" variant="outlined">Save</Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
