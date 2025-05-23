This is a sample ionic project

| Flutter     | Ionic Angular                       |
| ----------- | ----------------------------------- |
| `Column`    | `<ion-grid>` + vertical `<ion-row>` |
| `Row`       | `<ion-row>`                         |
| `Expanded`  | `<ion-col size="X">`                |
| `Container` | `<ion-card>`, `<div>`, etc.         |

Is <ion-grid> a Column?
No, ion-grid itself is not a Column.
Instead, it's the container that holds your layout — kind of like a scaffold or wrapper for rows and columns.

Wrap your layout inside <ion-content>, which is scrollable by default.
