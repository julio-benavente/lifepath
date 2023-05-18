import React, { useState } from "react";
import { AccessTimeFilledSharp, Dashboard } from "@mui/icons-material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import Link from "next/link";
import * as C from "@/components/index";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import {
  Box,
  Modal,
  Paper,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  tableCellClasses,
  useTheme,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const AppView = () => {
  const [addAppointmentModalIsOpen, setAddAppointmentModalIsOpen] =
    useState(false);

  return (
    <div className="max-w-[1980px] min-h-screen grid">
      <div className="grid min-h-full grid-cols-[248px_1fr]">
        <Sidebar />
        <main className="relative grid p-4 bg-blue-800">
          <div className="relative grid content-start p-8 bg-white rounded-2xl">
            <Header
              setAddAppointmentModalIsOpen={setAddAppointmentModalIsOpen}
            />
            <SearchForm />
            <AppointmentsTable />

            {/*  */}
            <AddAppointment
              isOpen={addAppointmentModalIsOpen}
              setIsOpen={setAddAppointmentModalIsOpen}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppView;

const AddAppointment = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)} closeAfterTransition>
      <Slide direction="left" in={isOpen} mountOnEnter>
        <div className="absolute top-0 bottom-0 right-0">
          <div className="h-full w-[500px] rounded-tl-2xl rounded-bl-2xl p-4 z-10 shadow-lg bg-white">
            <AddAppointmentSearchForm />
            <UserData />
            <AddAppointmentForm />
            <div></div>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};

const AddAppointmentSearchForm = () => {
  return (
    <div className="grid grid-flow-col gap-4 mb-4">
      <div className="grid auto-cols-fr">
        <C.Input.Text
          variant="outlined"
          label="Identification"
          className="bg-transparent"
        />
      </div>
      <C.Button className="self-end">Search</C.Button>
    </div>
  );
};

const UserData = () => {
  return (
    <div className="p-4 mb-8 border border-gray-300 rounded-xl">
      {[
        {
          label: "Marco Antonio Solis Arevalo",
          icon: Person4OutlinedIcon,
        },
        {
          label: "55",
          icon: CalendarMonthOutlinedIcon,
        },
      ].map((item) => (
        <div className="grid justify-start grid-flow-col gap-4">
          <span>
            <item.icon className="text-gray-600" />
          </span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

/*
   status: string,
    name: string,
    description: string,
    doctor: string,
    date: string,

*/
const AddAppointmentForm = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <C.Input.Text variant="outlined" label="Doctor" />
        <C.Input.Text variant="outlined" label="Date" />
        <C.Input.Text
          variant="outlined"
          label="Description"
          className="col-span-full"
        />
      </div>

      <div className="grid justify-end grid-flow-col gap-4">
        <C.Button>Cancel</C.Button>
        <C.Button>Save appointment</C.Button>
      </div>
    </div>
  );
};

const Header = ({
  setAddAppointmentModalIsOpen,
}: {
  setAddAppointmentModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grid items-center justify-between grid-flow-col mb-8">
      <h1 className="text-lg font-bold">Appointments</h1>
      <div>
        <C.Button onClick={() => setAddAppointmentModalIsOpen(true)}>
          Add appointment
        </C.Button>
      </div>
    </div>
  );
};

const SearchForm = () => {
  return (
    <div className="grid grid-flow-col gap-4 mb-8">
      <div className="grid grid-cols-3 gap-4 auto-cols-fr">
        <C.Input.Text variant="outlined" label="Identification" />
        <C.Input.Text variant="outlined" label="From" />
        <C.Input.Text variant="outlined" label="To" />
      </div>
      <C.Button className="self-end">Search</C.Button>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sticky top-0 max-h-screen px-6 py-6 bg-blue-800">
      <h1 className="mb-8 text-xl font-bold text-gray-200">Company logo</h1>
      {[
        {
          link: "/",
          label: "Home",
          icon: HomeOutlinedIcon,
        },
        {
          link: "/appointments",
          label: "Appointments",
          icon: CalendarTodayOutlinedIcon,
        },
        {
          link: "/patients",
          label: "Patients",
          icon: FamilyRestroomOutlinedIcon,
        },
        {
          link: "/doctors",
          label: "Doctors",
          icon: AccessTimeFilledSharp,
        },
        {
          link: "/invoices",
          label: "Invoices",
          icon: ReceiptLongOutlinedIcon,
        },
        {
          link: "/config",
          label: "Config",
          icon: SettingsOutlinedIcon,
        },
      ].map((e) => {
        return (
          <Link href={e.link} key={e.link}>
            <div className="grid grid-cols-[28px_1fr] gap-x-4 px-4 py-3 mb-2 text-gray-200 hover:text-white hover:bg-blue-700 rounded-lg items-center transition-all cursor-pointer">
              <div>{<e.icon className="w-5 h-5" />}</div>
              <p className="text-sm">{e.label}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const AppointmentsTable = () => {
  function createData(
    status: string,
    name: string,
    description: string,
    doctor: string,
    date: string,
    actions: string
  ) {
    return { status, name, description, doctor, date, actions };
  }

  const rows = [
    createData(
      "pending",
      "Frozen yoghurt",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Ice cream sandwich",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Eclair",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Cupcake",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Ice cream sandwich",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Eclair",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Cupcake",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Gingerbread",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Ice cream sandwich",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Eclair",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Cupcake",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
    createData(
      "pending",
      "Gingerbread",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, molestiae reprehenderit! Tempora nihil fugit maiores laudantium nobis ducimus et abort.",
      "Marco Aureleo",
      "04/05/2023",
      ""
    ),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const [dense, setDense] = React.useState(false);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="relative">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell className="text-white bg-black">Status</TableCell>
            <TableCell className="text-white bg-black">Full name</TableCell>
            <TableCell className="text-white bg-black" align="left">
              Description
            </TableCell>
            <TableCell className="text-white bg-black" align="center">
              Doctor
            </TableCell>
            <TableCell className="text-white bg-black" align="center">
              Date
            </TableCell>
            <TableCell className="text-white bg-black" align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          )
            .slice(0, 1)
            .map((row, i) => (
              <DashboardTableRow data={row} key={`${row.name}-${i}`} />
            ))}
          {emptyRows > 0 && (
            <TableRow
              style={{
                height: 40.8 * emptyRows,
              }}
            >
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[7, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

interface DashboardTableRowProps {
  data: {
    status: string;
    name: string;
    description: string;
    doctor: string;
    date: string;
  };
}

const DashboardTableRow = ({ data }: DashboardTableRowProps) => {
  return (
    <TableRow>
      <TableCell className="py-2">
        <span className="flex items-center justify-center w-6 h-6 mx-auto text-xs rounded bg-emerald-200 text-emerald-800">
          {data.status === "pending" && "P"}
        </span>
      </TableCell>
      <TableCell className="py-2" component="th" scope="row">
        {data.name}
      </TableCell>
      <Tooltip
        title={data.description}
        arrow
        placement="top"
        enterDelay={1000}
        enterNextDelay={1000}
      >
        <TableCell className="max-w-xs py-2 truncate" align="left">
          {data.description}
        </TableCell>
      </Tooltip>
      <TableCell className="py-2" align="center">
        {data.doctor}
      </TableCell>
      <TableCell className="py-2" align="center">
        {data.date}
      </TableCell>
      <TableCell className="py-2" align="center">
        <div className="relative">
          <button>
            <MoreVertOutlinedIcon className="text-gray-400 transition hover:text-gray-800" />
          </button>

          <Tooltip
            title={
              <ul>
                <li>See appointment</li>
                <li>See patient</li>
                <li>Cancel appointment</li>
              </ul>
            }
            className="absolute h-20 p-2 rounded-md shadow-md top-2 right-8 bg-pink-50"
          ></Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};
