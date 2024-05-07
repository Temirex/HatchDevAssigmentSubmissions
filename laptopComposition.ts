
import {
    Display,
    HardDisk,
    KeyBoard,
    Laptop,
    NetworkInterfaceCard,
    OperatingSystem,
  } from "./laptopAggregation";
  
  const show = console.log;
  
  const display = new Display(15.6, "lcd");
  
  display.displaySize = 16;
  display.setDisplayType("lcd");
  
  const nic = new NetworkInterfaceCard("nitlap");
  
  const hardDrive = new HardDisk("ssd", 1000);
  
  const inBuiltKeyboard = new KeyBoard("in-built", "Qwerty");
  
  const Windows = new OperatingSystem("Windows", 11);
  
  const nitLap = new Laptop(
    "Dell Inspiron - 7558",
    "x64",
    display,
    nic,
    hardDrive,
    [inBuiltKeyboard],
    Windows
  );
  
  // show(nitLap.properties);
