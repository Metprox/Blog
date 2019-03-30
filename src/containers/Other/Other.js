import React, { Component } from 'react';

import cls from './Other.scss';

import Data from 'Assets/data';
import Category from 'Assets/category';
import City from 'Assets/city';

class Other extends Component {
    state = {
        Data: Data,
        Category: Category,
        City: City,
        checkedFilter: true,
        filtersData: {},
        max: 0,
        min: 0,
    };

    handlerSwitcherCity = data => {
        if (data) {
            return this.state.City[data - 1].name;
        }
    };
    handlerSwitcherCategory = data => {
        if (data) {
            return this.state.Category[data - 1].name;
        }
    };

    maximalVal = () => {
        let resum = this.state.Data.map(item => {
            return item.price;
        });
        this.setState({
            max: Math.max(...resum) + '$'
        });
    };

    minimalVal = () => {
        let resum = this.state.Data.map(item => {
            return item.price;
        });
        this.setState({
            min: Math.min(...resum) + '$'
        });
    };

    componentDidMount() {
        this.maximalVal();
        this.minimalVal();
    }

    filterListCity = e => {
        let regex = /\d+/g;
        let string = e.target.value;
        let matches = string.match(regex);

        const filterListcity = this.state.Data.filter(val => {
            return val.city == matches;
        });
        this.setState({
            filtersData: filterListcity,
            checkedFilter: false,
        });
    };

    filterListCategory = e => {
        let regex = /\d+/g;
        let string = e.target.value;
        let matches = string.match(regex);

        const filterListcategory = this.state.Data.filter(val => {
            return val.category == matches;
        });
        this.setState({
            filtersData: filterListcategory,
            checkedFilter: false,
        });
    };

    render() {
        return (
            <main className={cls.main}>
                <section className="container">
                    <div className={cls.flex}>
                        <form className={cls.filters}>
                            <div className={cls.filters__selectors}>
                                <h1>City</h1>
                                <select
                                    className={cls.select}
                                    onChange={this.filterListCity}
                                >
                                    {this.state.City.map(item => (
                                        <option value={item.name} key={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cls.filters__categories}>
                                <h1>Categories</h1>
                                {this.state.Category.map(item => (
                                    <div key={item.id}>
                                        <input
                                            type="checkbox"
                                            onChange={this.filterListCategory}
                                            value={item.id}
                                            name="categories"
                                            id={item.id}
                                        />
                                        <label htmlFor={item.id}>
                                            {item.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className={cls.filters__range}>
                                <h1>Price</h1>
                                <input type="range" min="0" max="250" />
                                <p>{this.state.min} - {this.state.max}</p>
                                <button
                                    className={cls.filterBtn}
                                    onClick={this.filterList}
                                >
                                    Filter
                                </button>
                            </div>
                        </form>
                        <ul className={cls.list}>
                            {this.state.checkedFilter
                                ? this.state.Data.map(item => (
                                      <li className={cls.item} key={item.id}>
                                          <div className={cls.img}>
                                              <img
                                                  src={item.static}
                                                  alt="photo"
                                              />
                                              <p>
                                                  {this.handlerSwitcherCity(
                                                      item.city,
                                                  )}
                                              </p>
                                          </div>
                                          <div className={cls.description}>
                                              <h2>
                                                  Affiliate Marketing - A
                                                  Beginner's Guide to Earning
                                                  Online
                                              </h2>
                                              <div
                                                  className={
                                                      cls.description__options
                                                  }
                                              >
                                                  <span>
                                                      {this.handlerSwitcherCategory(
                                                          item.category,
                                                      )}
                                                  </span>
                                                  <span>
                                                      {item.price + '$'}
                                                  </span>
                                              </div>
                                          </div>
                                      </li>
                                  ))
                                : this.state.filtersData.map(item => (
                                      <li className={cls.item} key={item.id}>
                                          <div className={cls.img}>
                                              <img
                                                  src={item.static}
                                                  alt="photo"
                                              />
                                              <p>
                                                  {this.handlerSwitcherCity(
                                                      item.city,
                                                  )}
                                              </p>
                                          </div>
                                          <div className={cls.description}>
                                              <h2>
                                                  Affiliate Marketing - A
                                                  Beginner's Guide to Earning
                                                  Online
                                              </h2>
                                              <div
                                                  className={
                                                      cls.description__options
                                                  }
                                              >
                                                  <span>
                                                      {this.handlerSwitcherCategory(
                                                          item.category,
                                                      )}
                                                  </span>
                                                  <span>
                                                      {item.price + '$'}
                                                  </span>
                                              </div>
                                          </div>
                                      </li>
                                  ))}
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}

export default Other;
