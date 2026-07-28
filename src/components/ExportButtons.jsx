import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";

function ExportButtons({ tasks }) {
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Task Manager Pro", 14, 20);

    autoTable(doc, {
      startY: 30,

      head: [[
        "Task",
        "Category",
        "Priority",
        "Due Date",
        "Status"
      ]],

      body: tasks.map(task => [
        task.text,
        task.category,
        task.priority,
        task.dueDate || "-",
        task.completed ? "Completed" : "Pending"
      ])
    });

    doc.save("TaskManagerPro.pdf");
  };

  const exportCSV = () => {

    const rows = [
      [
        "Task",
        "Category",
        "Priority",
        "Due Date",
        "Status"
      ],

      ...tasks.map(task => [
        task.text,
        task.category,
        task.priority,
        task.dueDate || "",
        task.completed
          ? "Completed"
          : "Pending"
      ])
    ];

    const csv =
      rows
        .map(r => r.join(","))
        .join("\n");

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;"
      }
    );

    saveAs(blob, "TaskManagerPro.csv");
  };

  return (

    <div className="export-buttons">

      <button
        className="pdf-btn"
        onClick={exportPDF}
      >
        📄 Export PDF
      </button>

      <button
        className="csv-btn"
        onClick={exportCSV}
      >
        📊 Export CSV
      </button>

    </div>

  );
}

export default ExportButtons;