import React, { useState, useEffect } from "react";
import ConfirmedDialog from "../../../../../shared-component/confirmedDialog/ConfirmedDialog";
import ReactTable from "../../../../../shared-component/table/ReactTable";
import "./ListWork.css";
import { Link, useNavigate } from "react-router-dom";
import {
  DELETE_WORK_ACTION,
  GET_WORK_ACTION,
} from "../../../../../redux/actions/WorkActions";
import { useDispatch, useSelector } from "react-redux";

export default function ListWork() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.AuthenticationReducer);
  const { workList } = useSelector((state) => state.WorkReducer);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
  });

  useEffect(() => {
    dispatch(GET_WORK_ACTION(currentUser.id));
  }, []);

  const Columns = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Company",
      accessor: "workPlaceName",
    },
    {
      Header: "Designation",
      accessor: "designation",
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
            <span onClick={() => editWork(rowIdx)}>
              <i className="far fa-edit"></i>
            </span>
            &nbsp;&nbsp;
            <span
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: "Are you sure to delete record ?",
                  onConfirm: () => {
                    deleteWork(rowIdx);
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

  const editWork = (id) => {
    navigate("/home/profile/work/edit/" + id);
  };

  const deleteWork = (id) => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
    dispatch(DELETE_WORK_ACTION(id));
  };

  return (
    <div className="work">
      <div className="flex-box">
        <b>Work Details</b>
        <Link to="/home/profile/work/add" type="button" class="btn btn-primary">
          Add
        </Link>
      </div>
      {workList && workList.length > 0 && (
        <>
          <ReactTable tableData={workList} tableColumns={Columns} />
          <ConfirmedDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </>
      )}
    </div>
  );
}
