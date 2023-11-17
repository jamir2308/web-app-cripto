import { changeColor } from "@/app/utils/constants";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typography } from "@mui/material";

export const ChangeArrowIndicator = ({ value }: { value: number }) => {
    return (
        <Typography
            variant="body1"
            sx={{ color: changeColor(value) }}
            mt={1}
            display="flex"
            alignItems="center"
        >
            {value > 0 ? (
                <ArrowUpwardIcon data-testid="ArrowUpwardIcon" fontSize="small" />
            ) : (
                <ArrowDownwardIcon data-testid="ArrowDownwardIcon" fontSize="small" />
            )}
            {value}%
        </Typography>
    );
};