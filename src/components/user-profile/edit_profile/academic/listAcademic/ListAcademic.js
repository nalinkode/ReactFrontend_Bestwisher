import React, { useState, useEffect } from "react";
import ConfirmedDialog from "../../../../../shared-component/confirmedDialog/ConfirmedDialog";
import ReactTable from "../../../../../shared-component/table/ReactTable";
import { useDispatch, useSelector } from "react-redux";
import "./ListAcademic.css";
import { Link, useNavigate } from "react-router-dom";
import {
  DELETE_ACADEMIC_ACTION,
  GET_ACADEMIC_ACTION,
} from "../../../../../redux/actions/AcademicActions";

export default function ListAcademic() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { academicList } = useSelector((state) => state.AcademicReducer);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
  });

  useEffect(() => {
    dispatch(GET_ACADEMIC_ACTION(currentUser.id));
  }, []);

  const Columns = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "School Name",
      accessor: "schoolName",
    },
    {
      Header: "From Date",
      accessor: "fromDate",
    },
    { Header: "To Date", accessor: "toDate" },
    {
      Header: "show/hide",
      accessor: "hide",
      Cell: (props) => {
        return props.value ? "Hide" : "Show";
      },
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: (props) => {
        const rowIdx = props.row.values.id;
        return (
          <div className="text-center">
            <span onClick={() => editAcademic(rowIdx)}>
              <i className="far fa-edit"></i>
            </span>
            &nbsp;&nbsp;
            <span
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: "Are you sure to delete record ?",
                  onConfirm: () => {
                    deleteAcademic(rowIdx);
                  },
                });
              }}
            >
              <i className="far fa-trash-alt delete-icon"></i>
            </span>
          </div>
        );
      },
    },
  ];

  const editAcademic = (id) => {
    navigate("/home/profile/academic/edit/" + id);
  };

  const deleteAcademic = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    dispatch(DELETE_ACADEMIC_ACTION(id));
  };

  return (
    <div className="acdemic">
      <div className="flex-box">
        <b>Academic Details</b>
        <Link
          to="/home/profile/academic/add"
          type="button"
          className="btn btn-primary"
        >
          Add
        </Link>
      </div>
      {academicList && academicList.length > 0 && (
        <>
          <ReactTable tableData={academicList} tableColumns={Columns} />
          <ConfirmedDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </>
      )}
    </div>
  );
}
