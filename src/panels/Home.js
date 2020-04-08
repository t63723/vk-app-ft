import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import { Link } from '@vkontakte/vkui';


const textAlign = {
	"textAlign": "center",
	"paddingTop": "40px"
};

const buttonMain = {
	"backgroundColor": "#2B50ED",
	"color": "white",
	"padding": "1em 1.5em",
	"textDecoration": "none",
	"textTransform": "uppercase",
	"borderRadius": "14px"
}

const buttonSecond = {
	"backgroundColor": "#E0E8F6",
	"color": "#2B50ED",
	"padding": "1em 1.5em",
	"textDecoration": "none",
	"textTransform": "uppercase",
	"borderRadius": "14px"
}

const Home = ({ id, go, fetchedUser, vkTopic }) => (
	<Panel id={id}>
		<PanelHeader>Physical Transformation</PanelHeader>
		<Div style={textAlign}>
			<Group>
				<Cell>
					<Div>
						<Div>
							<Link href="https://physical-transformation.online/" target="_blank" style={buttonMain}>Планка, отчеты</Link>
						</Div>
					</Div>
				</Cell>
				<Cell>
					<Div>
						<Div>
							{fetchedUser && vkTopic && <Link href={`${vkTopic}?offset=last`} target="_blank" style={buttonSecond}>Твоя тема</Link>}
						</Div>
					</Div>
				</Cell>
			</Group>
		</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		id: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
