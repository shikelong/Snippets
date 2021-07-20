import { IRoute } from 'utils/routerUtils';
import {{toPascalCase pageName}} from './components/{{toPascalCase pageName}}';

const {{toPascalCase pageName}}Route: IRoute = {
  path: '/{{toLowerCase pageName}}',
  name: '{{toLowerCase pageName}}',
  component: {{toPascalCase pageName}},
};

export default {{toPascalCase pageName}}Route;