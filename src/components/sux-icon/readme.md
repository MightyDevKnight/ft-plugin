# sux-icon



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                   | Type     | Default     |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`   | `label`   | An alternative description to use for accessibility. If omitted, the name or src will be used to generate it. | `string` | `undefined` |
| `library` | `library` | The name of a registered custom icon library.                                                                 | `string` | `'default'` |
| `name`    | `name`    | The name of the icon to draw.                                                                                 | `string` | `undefined` |
| `src`     | `src`     | An external URL of an SVG file.                                                                               | `string` | `undefined` |


## Events

| Event       | Description                           | Type                                |
| ----------- | ------------------------------------- | ----------------------------------- |
| `sux-error` | Emitted when the icon failed to load. | `CustomEvent<{ status?: number; }>` |
| `sux-load`  | Emitted when the icon has loaded.     | `CustomEvent<any>`                  |


## Shadow Parts

| Part     | Description                   |
| -------- | ----------------------------- |
| `"base"` | The component's base wrapper. |


## Dependencies

### Used by

 - [sux-avatar](../sux-avatar)
 - [sux-icon-button](../sux-icon-button)

### Graph
```mermaid
graph TD;
  sux-avatar --> sux-icon
  sux-icon-button --> sux-icon
  style sux-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
