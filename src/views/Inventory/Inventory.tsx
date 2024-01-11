import { Button, ButtonGroup, Input, Stack, Typography } from "@mui/joy";
import ModelList from "../../components/Models/ModelList";
import { Filter, Search, SortAsc } from "lucide-react";
import { defaultIconProps } from "../../styles/props";

const Inventory = () => {
  return (
    <div>
      <Typography level="title-lg" my={1}>
        Models
      </Typography>
      <Stack spacing={1}>
        <Input
          size="md"
          placeholder="Search models"
          endDecorator={<Search {...defaultIconProps} />}
        />
        <ButtonGroup spacing={1}>
          <Button size="sm" startDecorator={<Filter {...defaultIconProps} />}>
            Filter
          </Button>
          <Button size="sm" startDecorator={<SortAsc {...defaultIconProps} />}>
            Sort
          </Button>
        </ButtonGroup>
        <br />
        <ModelList />
      </Stack>
    </div>
  );
};

export default Inventory;
