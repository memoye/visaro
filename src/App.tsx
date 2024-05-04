import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
import SharedAppLayout from './components/SharedAppLayout';
import SharedHomeLayout from './pages/SharedHomeLayout';

const router = createBrowserRouter([
	{
		element: <SharedAppLayout />,
		children: [
			{
				path: '/',
				element: <SharedHomeLayout />,
				children: [
					{
						path: "/:category",
						element: <Home />
					}
				]
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
