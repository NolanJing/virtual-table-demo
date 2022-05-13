# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
 
### 修改
文件 ./node_modules/rc-virtual-list/lib/List.d.ts
line 34 

// declare const _default: <Item = any>(props: ListProps<Item> & {
//     children?: React.ReactNode;
// } & {
//     ref?: React.Ref<ListRef>;
// }) => React.ReactElement;

改为:

declare const _default: <Item = any>(
    props: ListProps<Item> & { ref?: React.Ref<ListRef> },
  ) => React.ReactElement;
