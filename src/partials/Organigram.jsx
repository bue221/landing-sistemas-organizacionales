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
                title: "Director comercial",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image: "",
                    name: "",
                    title: "Comercial",
                  },
                  children: [
                    {
                      expanded: true,
                      type: "person",
                      data: {
                        image: "",
                        name: "",
                        title: "Auxiliar comercial",
                      },
                    },
                    {
                      expanded: true,
                      type: "person",
                      data: {
                        image: "",
                        name: "",
                        title: "Auxiliar comercial",
                      },
                    },
                  ],
                },
              ],
            },
            {
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Marketing digital",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image: "",
                    name: "",
                    title: "Publicista",
                  },
                },
              ],
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
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Director de Operaciones",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image: "",
                    name: "",
                    title: "Especialista en Control de Calidad",
                  },
                },
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image: "",
                    name: "",
                    title: "Especialista en logistica",
                  },
                },
              ],
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
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Tecnología de la Información",
              },
            },
            {
              expanded: true,
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
          expanded: true,
          type: "person",
          data: {
            image: "",
            name: "",
            title: "Finanzas",
          },
          children: [
            {
              expanded: true,
              type: "person",
              data: {
                image: "",
                name: "",
                title: "Contador",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  data: {
                    image: "",
                    name: "",
                    title: "Auxiliar administrativo",
                  },
                },
              ],
            },
          ],
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
