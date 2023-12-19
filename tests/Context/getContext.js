const { devices } = require( "playwright" );

const GetContext = ( deviceName ) => {
  let context = {};
  switch ( deviceName.name ) {
    case "iPhone 14":
    case "iPhone SE":
    case "Galaxy S5":
    case "Pixel 7":
    case "Galaxy Tab S4":
    case "iPad (gen 5)":
    case "iPad Pro 11":
    case "Desktop Chrome HiDPI":
    case "Desktop Edge HiDPI":
    case "Desktop Firefox HiDPI":
      context = { ...devices[ deviceName.name ] };
      break;
    case "MacBook Air 2020 13":
      context = { viewport: { width: 1280, height: 800 } };
      break;

    case "Microsoft Surface":
      context = { viewport: { width: 1366, height: 768 } };
      break;
    case "Macbook Pro 15":
      context = { viewport: { width: 1440, height: 900 } };
      break;
    case "Desktop Safari":
    case "Desktop Chrome":
    case "Desktop Firefox":
      context = { viewport: { width: 1920, height: 1080 } };
      break;
    case "Desktop Edge HiDPI":
      context = { viewport: { width: 1280, height: 1024 } };
      break;
    case "ultrawide FHD":
      context = { viewport: { width: 2560, height: 1080 } };
      break;
    case "ultrawide QHD":
      context = { viewport: { width: 3440, height: 1440 } };
      break;
    case "ultrawide 4K":
      context = { viewport: { width: 3840, height: 1600 } };
      break;
    default:
      console.warn(
        `Unsupported device: ${ deviceName }. Using default settings.`
      );
  }
  return context;
};

export default GetContext;
