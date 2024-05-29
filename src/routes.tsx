import { PieChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Dashboard from "./views/dashboard";
import User from "./views/user";
import ButtonPage from "./views/components/general/button";
import TypographyPage from "./views/components/general/typography";
import AnchorPage from "./views/components/navigation/anchor";
import BreadcrumbPage from "./views/components/navigation/breadcrumb";
import DropdownPage from "./views/components/navigation/dropdown";
import PaginationPage from "./views/components/navigation/pagination";
import StepPage from "./views/components/navigation/step";
import ProfilePage from "./views/profile";
import EditProfilePage from "./views/profile/edit";
import { FaBrush, FaListUl, FaPenToSquare, FaRegCompass, FaUserGear, FaUserLock, FaUserShield, FaWaveSquare } from "react-icons/fa6";
import RolePage from "./views/role";
import AutoCompletePage from "./views/components/data-entry/autocomplete";
import CascaderPage from "./views/components/data-entry/cascader";
import CheckboxPage from "./views/components/data-entry/checkbox";
import ColorPickerPage from "./views/components/data-entry/colorpicker";
import DatePickerPage from "./views/components/data-entry/datepicker";
import FormPage from "./views/components/data-entry/form";
import InputPage from "./views/components/data-entry/input";
import UploadPage from "./views/components/data-entry/upload";
import AvatarPage from "./views/components/data-display/avatar";
import BadgePage from "./views/components/data-display/badge";
import CalenderPage from "./views/components/data-display/calender";
import CardPage from "./views/components/data-display/card";
import CarouselPage from "./views/components/data-display/carousel";
import CollapsePage from "./views/components/data-display/collapse";
import DescriptionPage from "./views/components/data-display/description";
import EmptyPage from "./views/components/data-display/empty";
import ImagePage from "./views/components/data-display/image";
import ListPage from "./views/components/data-display/list";
import PopoverPage from "./views/components/data-display/popover";
import QrcodePage from "./views/components/data-display/Qrcode";
import TablePage from "./views/components/data-display/table";
import TabPage from "./views/components/data-display/tab";
import TagPage from "./views/components/data-display/tag";
import TimelinePage from "./views/components/data-display/timeline";
import TreePage from "./views/components/data-display/tree";
import AlertPage from "./views/components/feedback/alert";
import DrawerPage from "./views/components/feedback/drawer";
import MessagePage from "./views/components/feedback/message";
import ModalPage from "./views/components/feedback/modal";
import NotificationPage from "./views/components/feedback/notification";
import PopconfirmPage from "./views/components/feedback/popconfirm";
import ProgressPage from "./views/components/feedback/progress";
import ResultPage from "./views/components/feedback/result";
import SkeltonPage from "./views/components/feedback/skeleton";
import SpinPage from "./views/components/feedback/spin";
import { BsEnvelope } from "react-icons/bs";
import Mail from "./views/mail";
import MailPage from "./views/mail";
import ChatPage from "./views/chat";
import PricingPage from "./views/pricing";

/*
  baseKey for open accordion sidebar
  basaParent key for active sidebar when menu sidebar is false
*/
const routes: RoutesType[] = [
  {
    key: "/profile",
    name: "Profile",
    path: "/profile",
    component: <ProfilePage />,
    sidebar: false,
    children: [
      {
        key: "/profile/edit",
        name: "Edit Profile",
        path: "/profile/edit",
        baseKey: "/profile",
        component: <EditProfilePage />,
        sidebar: false,
      },
    ],
  },
  {
    key: "/",
    name: "Dashboard",
    path: "/",
    link: <Link to="/">Dashboard</Link>,
    icon: <PieChartOutlined />,
    component: <Dashboard />,
    sidebar: true,
  },
  {
    key: "/apps",
    name: "Apps",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/apps/mail",
        name: "Mail",
        path: "/apps/mail",
        link: <Link to="/apps/mail">Mail</Link>,
        icon: <BsEnvelope />,
        component: <MailPage />,
        sidebar: true,
      },
      {
        key: "/apps/chat",
        name: "Chat",
        path: "/apps/chat",
        link: <Link to="/apps/chat">Chat</Link>,
        icon: <BsEnvelope />,
        component: <ChatPage />,
        sidebar: true,
      },
    ],
  },  
  // {
  //   key: "/apps/mail",
  //   name: "Mail",
  //   path: "/apps/mail",
  //   link: <Link to="/apps/mail">Mail</Link>,
  //   icon: <BsEnvelope />,
  //   component: <MailPage />,
  //   sidebar: true,
  // },
  {
    key: "/pages",
    name: "Pages",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/authentication",
        name: "Authentication",
        icon: <FaUserLock />,
        sidebar: true,
        children: [
          {
            key: "/login",
            name: "Sign In",
            path: "/login",
            link: <Link to="/login">Sign In</Link>,
            sidebar: true,
          },
          {
            key: "/register",
            name: "Register",
            path: "/register",
            link: <Link to="/register">Register</Link>,
            sidebar: true,
          },
          {
            key: "/reset-password",
            name: "Reset Password",
            path: "/reset-password",
            link: <Link to="/reset-password">Reset Password</Link>,
            sidebar: true,
          },
          {
            key: "/new-password",
            name: "New Password",
            path: "/new-password",
            link: <Link to="/new-password">New Password</Link>,
            sidebar: true,
          },
        ],
      },
      {
        key: "/pages/user-management",
        name: "User Management",
        icon: <FaUserGear />,
        sidebar: true,
        children: [
          {
            key: "/pages/user-management/user",
            name: "User",
            path: "/pages/user-management/user",
            baseKey: "/pages/user-management",
            link: <Link to="/pages/user-management/user">User</Link>,
            component: <User />,
            sidebar: true,
          },
          {
            key: "/pages/user-management/user/create",
            name: "Create User",
            path: "/pages/user-management/user/create",
            baseKey: "/pages/user-management",
            baseParentKey: "/pages/user-management/user",
            link: <Link to="/pages/user-management/user/create">User</Link>,
            component: <User />,
            sidebar: false,
          },
        ],
      },
      {
        key: "/pages/role-permission",
        name: "Role & Permission",
        icon: <FaUserShield />,
        sidebar: true,
        children: [
          {
            key: "/pages/role-permission/role",
            name: "Role",
            path: "/pages/role-permission/role",
            baseKey: "/pages/role-permission",
            link: <Link to="/pages/role-permission/role">Role</Link>,
            component: <RolePage />,
            sidebar: true,
          },
          {
            key: "/user/create",
            name: "Create User",
            path: "/user/create",
            baseKey: "/user-management",
            baseParentKey: "/user",
            link: <Link to="/user/create">User</Link>,
            component: <User />,
            sidebar: false,
          },
        ],
      },
      {
        key: "/pages/pricing",
        name: "Pricing",
        path: "/pages/pricing",
        link: <Link to="/pages/pricing">Pricing</Link>,
        icon: <PieChartOutlined />,
        component: <PricingPage />,
        sidebar: true,
      },
    ],
  },
  {
    key: "/components",
    name: "Components",
    sidebar: true,
    isGroup: "group",
    groupItem: [
      {
        key: "/components/general",
        name: "General",
        icon: <FaListUl />,
        sidebar: true,
        children: [
          {
            key: "/components/general/button",
            name: "Button",
            path: "/components/general/button",
            link: <Link to="/components/general/button">Button</Link>,
            component: <ButtonPage />,
            sidebar: true,
            baseKey: "/components/general",
          },
          {
            key: "/components/general/typography",
            name: "Typography",
            path: "/components/general/typography",
            link: <Link to="/components/general/typography">Typography</Link>,
            component: <TypographyPage />,
            sidebar: true,
            baseKey: "/components/general",
          },
        ],
      },
      {
        key: "/components/navigation",
        name: "Navigation",
        icon: <FaRegCompass />,
        sidebar: true,
        children: [
          {
            key: "/components/navigation/anchor",
            name: "Anchor",
            path: "/components/navigation/anchor",
            link: <Link to="/components/navigation/anchor">Anchor</Link>,
            component: <AnchorPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/breadcrumb",
            name: "Breadcrumb",
            path: "/components/navigation/breadcrumb",
            link: <Link to="/components/navigation/breadcrumb">Breadcrumb</Link>,
            component: <BreadcrumbPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/dropdown",
            name: "Dropdown",
            path: "/components/navigation/dropdown",
            link: <Link to="/components/navigation/dropdown">Dropdown</Link>,
            component: <DropdownPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/pagination",
            name: "Pagination",
            path: "/components/navigation/pagination",
            link: <Link to="/components/navigation/pagination">Pagination</Link>,
            component: <PaginationPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
          {
            key: "/components/navigation/step",
            name: "Step",
            path: "/components/navigation/step",
            link: <Link to="/components/navigation/step">Step</Link>,
            component: <StepPage />,
            sidebar: true,
            baseKey: "/components/navigation",
          },
        ],
      },
      {
        key: "/components/data-entry",
        name: "Data Entry",
        icon: <FaPenToSquare />,
        sidebar: true,
        children: [
          {
            key: "/components/data-entry/autocomplete",
            name: "Auto Complete",
            path: "/components/data-entry/autocomplete",
            link: <Link to="/components/data-entry/autocomplete">Auto Complete</Link>,
            component: <AutoCompletePage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/cascader",
            name: "Cascader",
            path: "/components/data-entry/cascader",
            link: <Link to="/components/data-entry/cascader">Cascader</Link>,
            component: <CascaderPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/checkbox",
            name: "Checkbox",
            path: "/components/data-entry/checkbox",
            link: <Link to="/components/data-entry/checkbox">Checkbox</Link>,
            component: <CheckboxPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/color-picker",
            name: "Color Picker",
            path: "/components/data-entry/color-picker",
            link: <Link to="/components/data-entry/color-picker">Color Picker</Link>,
            component: <ColorPickerPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/date-picker",
            name: "Date Picker",
            path: "/components/data-entry/date-picker",
            link: <Link to="/components/data-entry/date-picker">Date Picker</Link>,
            component: <DatePickerPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/form",
            name: "Form",
            path: "/components/data-entry/form",
            link: <Link to="/components/data-entry/form">Form</Link>,
            component: <FormPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/input",
            name: "Input",
            path: "/components/data-entry/input",
            link: <Link to="/components/data-entry/input">Input</Link>,
            component: <InputPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
          {
            key: "/components/data-entry/upload",
            name: "Upload",
            path: "/components/data-entry/upload",
            link: <Link to="/components/data-entry/upload">Upload</Link>,
            component: <UploadPage />,
            sidebar: true,
            baseKey: "/components/data-entry",
          },
        ],
      },
      {
        key: "/components/data-display",
        name: "Data Display",
        icon: <FaBrush />,
        sidebar: true,
        children: [
          {
            key: "/components/data-display/avatar",
            name: "Avatar",
            path: "/components/data-display/avatar",
            link: <Link to="/components/data-display/avatar">Avatar</Link>,
            component: <AvatarPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/badge",
            name: "Badge",
            path: "/components/data-display/badge",
            link: <Link to="/components/data-display/badge">Badge</Link>,
            component: <BadgePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/calender",
            name: "Calender",
            path: "/components/data-display/calender",
            link: <Link to="/components/data-display/calender">Calender</Link>,
            component: <CalenderPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/card",
            name: "Card",
            path: "/components/data-display/card",
            link: <Link to="/components/data-display/card">Card</Link>,
            component: <CardPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/carousel",
            name: "Carousel",
            path: "/components/data-display/carousel",
            link: <Link to="/components/data-display/carousel">Carousel</Link>,
            component: <CarouselPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/collapse",
            name: "Collapse",
            path: "/components/data-display/collapse",
            link: <Link to="/components/data-display/collapse">Collapse</Link>,
            component: <CollapsePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },          
          {
            key: "/components/data-display/description",
            name: "Description",
            path: "/components/data-display/description",
            link: <Link to="/components/data-display/description">Description</Link>,
            component: <DescriptionPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/empty",
            name: "Empty",
            path: "/components/data-display/empty",
            link: <Link to="/components/data-display/empty">Empty</Link>,
            component: <EmptyPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/image",
            name: "Image",
            path: "/components/data-display/image",
            link: <Link to="/components/data-display/image">Image</Link>,
            component: <ImagePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/list",
            name: "List",
            path: "/components/data-display/list",
            link: <Link to="/components/data-display/list">List</Link>,
            component: <ListPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/popover",
            name: "Popover",
            path: "/components/data-display/popover",
            link: <Link to="/components/data-display/popover">Popover</Link>,
            component: <PopoverPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/qrcode",
            name: "Qrcode",
            path: "/components/data-display/qrcode",
            link: <Link to="/components/data-display/qrcode">Qrcode</Link>,
            component: <QrcodePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/table",
            name: "Table",
            path: "/components/data-display/table",
            link: <Link to="/components/data-display/table">Table</Link>,
            component: <TablePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/tab",
            name: "Tab",
            path: "/components/data-display/tab",
            link: <Link to="/components/data-display/tab">Tab</Link>,
            component: <TabPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/tag",
            name: "Tag",
            path: "/components/data-display/tag",
            link: <Link to="/components/data-display/tag">Tag</Link>,
            component: <TagPage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/timline",
            name: "Timeline",
            path: "/components/data-display/timline",
            link: <Link to="/components/data-display/timline">Timeline</Link>,
            component: <TimelinePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
          {
            key: "/components/data-display/tree",
            name: "Tree",
            path: "/components/data-display/tree",
            link: <Link to="/components/data-display/tree">Tree</Link>,
            component: <TreePage />,
            sidebar: true,
            baseKey: "/components/data-display",
          },
        ],
      },
      {
        key: "/components/feedback",
        name: "Feedback",
        icon: <FaWaveSquare />,
        sidebar: true,
        children: [
          {
            key: "/components/feedback/alert",
            name: "Alert",
            path: "/components/feedback/alert",
            link: <Link to="/components/feedback/alert">Alert</Link>,
            component: <AlertPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/drawer",
            name: "Drawer",
            path: "/components/feedback/drawer",
            link: <Link to="/components/feedback/drawer">Drawer</Link>,
            component: <DrawerPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/message",
            name: "Message",
            path: "/components/feedback/message",
            link: <Link to="/components/feedback/message">Message</Link>,
            component: <MessagePage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/modal",
            name: "Modal",
            path: "/components/feedback/modal",
            link: <Link to="/components/feedback/modal">Modal</Link>,
            component: <ModalPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/notification",
            name: "Notication",
            path: "/components/feedback/notification",
            link: <Link to="/components/feedback/notification">Notication</Link>,
            component: <NotificationPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/popconfirm",
            name: "Popconfirm",
            path: "/components/feedback/popconfirm",
            link: <Link to="/components/feedback/popconfirm">Popconfirm</Link>,
            component: <PopconfirmPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/progress",
            name: "Progress",
            path: "/components/feedback/progress",
            link: <Link to="/components/feedback/progress">Progress</Link>,
            component: <ProgressPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/result",
            name: "Result",
            path: "/components/feedback/result",
            link: <Link to="/components/feedback/result">Result</Link>,
            component: <ResultPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/skeleton",
            name: "Skeleton",
            path: "/components/feedback/skeleton",
            link: <Link to="/components/feedback/skeleton">Skeleton</Link>,
            component: <SkeltonPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
          {
            key: "/components/feedback/spin",
            name: "Spin",
            path: "/components/feedback/spin",
            link: <Link to="/components/feedback/spin">Spin</Link>,
            component: <SpinPage />,
            sidebar: true,
            baseKey: "/components/feedback",
          },
        ],
      },
    ],
  },
];

export default routes;
