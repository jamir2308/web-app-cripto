import { changeColor } from "@/app/utils/constants";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { CardIconStyled } from "./Card.styles";

export const CardIcon = ({ value }: { value: number }) => {
    return (
        <CardIconStyled
            $bgColor={value > 0 ? "#e8faed" : "#ffedec"}
            sx={{ color: changeColor(value) }}
            display="flex"
            justifyContent="center"
        >
            {value > 0 ? (
                <EmojiEventsIcon fontSize="large" />
            ) : (
                <ArrowDropDownCircleIcon fontSize="large" />
            )}
        </CardIconStyled>
    );
};