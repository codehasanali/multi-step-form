import sidebarStyles from "./sidebar.module.css";
import Step from "../../layout/Step/Step";

type Props = {
  step: number;
  navigate: React.MouseEventHandler<HTMLDivElement>;
};

const stepsList = [
  {
    number: "1",
    title: "Step 1",
    description: "Your info",
  },
  {
    number: "2",
    title: "Step 2",
    description: "Select Plan",
  },
  {
    number: "3",
    title: "Step 3",
    description: "Add-ons",
  },
  {
    number: "4",
    title: "Step 4",
    description: "Summary",
  },
];

const Sidebar = (props: Props) => {
  return (
    <div id="sidebar-wrapper" className={sidebarStyles.sidebarWrapper}>
      {stepsList.map((step) => (
        <Step
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          filled={props.step.toString() === step.number ? true : false}
          navigate={props.navigate}
        />
      ))}
    </div>
  );
};

export default Sidebar;
