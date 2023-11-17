import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Trend } from "@/app/components/common/table/Trend";
import Link from "next/link";
import { CoinTableProps } from "@/app/models/ProductModel";
import { StyledTableContainer, StyledTableRow } from "./Index.styles";
import { PercentageChange } from "@/app/utils/constants";

const CoinTable: React.FC<CoinTableProps> = ({ coins }) => {
  return (
    <StyledTableContainer maxWidth="xl">
      <Box>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <TableCell>Moneda</TableCell>
              <TableCell align="left">Precio USD</TableCell>
              <TableCell align="left">1h</TableCell>
              <TableCell align="left">24h</TableCell>
              <TableCell align="left">7d</TableCell>
              <TableCell align="left">trend</TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody
            sx={{
              overflow: "hidden",
              marginBottom: "10px",
              borderRadius: "12px",
            }}
          >
            {coins?.map((coin, index) => (
              <StyledTableRow
                key={coin.id}
                sx={{
                  "&:not(:last-child)": { mb: 2 },
                  borderRadius: "12px",
                  boxShadow: 3,
                  bgcolor: "white",
                }}
              >
                <TableCell scope="row" align="right">
                    <Link href={`/dashboard/products/${coin.id}`}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={2}
                    >
                    <Stack>
                      <Image
                        src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLocaleLowerCase()}`}
                        width={40}
                        height={40}
                        alt={`${coin.name} icon`}
                        />
                    </Stack>
                    <Stack textAlign="left">
                      <Typography variant="h6" color="#2E2E3A">
                        {coin.name}
                      </Typography>
                      <Typography variant="caption" color="#9A9AAF">
                        {coin.symbol}
                      </Typography>
                    </Stack>
                  </Box>
                </Link>
                </TableCell>
                <TableCell align="left">
                  <Typography>$ {coin.price_usd}</Typography>
                </TableCell>
                <TableCell align="left">
                  <PercentageChange value={coin.percent_change_1h} />
                </TableCell>
                <TableCell align="left">
                  <PercentageChange value={coin.percent_change_24h} />
                </TableCell>
                <TableCell align="left">
                  <PercentageChange value={coin.percent_change_7d} />
                </TableCell>
                <TableCell align="right">
                  <Box width={100} height={40} display='flex' justifyContent="flex-end">
                    <Trend
                      dataPoints={[
                        coin.percent_change_1h,
                        coin.percent_change_24h,
                        coin.percent_change_7d,
                      ]}
                    />
                  </Box>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </StyledTableContainer>
  );
};

export default CoinTable;
