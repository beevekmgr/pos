import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';

export default class Content extends Component {
  render() {
    return (
      <div className="box-container window-content">
        <Link to="/app/sales" className="box btn btn-primary">
          <div className="icon">
            <FontAwesome.FaCcMastercard />
          </div>
          Make A Sale{' '}
        </Link>{' '}
        {/* <Link to = "/app/addItem" className="box btn btn-positive">
					<div className="icon">
						<FontAwesome.FaPlus />
					</div>
					Add Items{' '}
				</Link>{' '}
				<Link to = "/app/manageItem" className="box btn btn-negative">
					<div className="icon">
						<FontAwesome.FaTasks />
					</div>
					Manage Items{' '}
				</Link>{' '}
				<div className="box btn btn-warning">
					<div className="icon">
						<FontAwesome.FaChartBar />
					</div>
					See reports{' '}
				</div>{' '}
				<div className="box btn btn-primary">
					<div className="icon">
						<FontAwesome.FaCog />
					</div>
					Settings{' '}
				</div>{' '}
				<div className="box btn btn-positive">
					<div className="icon">
						<FontAwesome.FaUserPlus />
					</div>
					Manage <br /> Employees{' '}
				</div>{' '}
				<div className="box btn btn-negative">
					<div className="icon">
						<FontAwesome.FaPowerOff />
					</div>
					Logout{' '}
				</div>{' '} */}
      </div>
    );
  }
}
