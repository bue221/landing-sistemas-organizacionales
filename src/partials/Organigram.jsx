import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

export default function Organigram() {
  const [selection, setSelection] = useState([]);
  const [data] = useState([
    {
      expanded: true,
      type: "person",
      data: {
        image: "",
        name: "",
        title: "Dirección Ejecutiva",
      },
      children: [
        {
          expanded: true,
          type: "person",
          data: {
            image: "",
            name: "",
            title: "Desarrollo de Negocios",
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Desarrollo de Negocios",
              },
            },
            {
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Especialistas en Ventas",
              },
            },
            {
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Marketing Digital",
              },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image: "",
            name: "",
            title: "Operaciones",
          },
          children: [
            {
              expanded: false,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Especialista en Logística",
              },
            },
            {
              expanded: false,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Especialista en Control de Calidad",
              },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          data: {
            image: "",
            name: "",
            title: "Tecnología",
          },
          children: [
            {
              expanded: false,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Tecnología de la Información",
              },
            },
            {
              expanded: false,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Desarrollador de Software",
              },
            },
          ],
        },
        {
          expanded: false,
          type: "person",
          data: {
            image: "",
            name: "",
            title: "Finanzas",
          },
        },
      ],
    },
  ]);

  const nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div className="flex flex-column">
          <div className="flex flex-column align-items-center">
            <img
              alt={node.data.name}
              src={node.data.image}
              className="mb-3 w-3rem h-3rem"
            />
            <span className="font-bold mb-2">{node.data.name}</span>
            <span>{node.data.title}</span>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div className="card overflow-x-auto">
      <OrganizationChart
        value={data}
        selectionMode="multiple"
        selection={selection}
        onSelectionChange={(e) => setSelection(e.data)}
        nodeTemplate={nodeTemplate}
      />
    </div>
  );
}
