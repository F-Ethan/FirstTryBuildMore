import React, { useState, useEffect } from 'react';
import axios from 'axios';
import project from '../../pictures/homepage1.jpg';

const GitHubRepos = () => {
  const [GitHubReposData, setGitHubRepos] = useState({
    GitHubRepos: [],
  });

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  const { GitHubRepos } = GitHubReposData;

  const fetchGitHubRepos = () => {
    var encodedURI = "https://api.github.com/users/F-Ethan/repos";
    return axios.get(encodedURI).then(response => {
      console.log(response.data)
      setGitHubRepos({

        GitHubRepos: response.data,
      });
    });
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  return (
    <div className='About container shadow-lg mt-3 p-3 mb-5 rounded'>
      <div className="pitcture">
        <img class="d-block w-100" src={project} alt="First slide"></img>
      </div>
      <div className='card text-center mt-3'>
        <div className='card-header'>
          <h5 className='card-title'>My Projects</h5>
          <h6 className='card-subtitle mb-2 '>
            This is a list of all my curent Repositories on GitHub,
          </h6>
          <h6 className='card-subtitle mb-3'>
            Of cousres this is not a complete list of what I have done, but it is a good repersentation of what I know how to do.
          </h6>
        </div>

        <div className='list-group list-group-flush shadow-lg p-3  rounded '>
          {GitHubRepos.map((blog, index) => {
            return (
              <button
                className='list-group-item list-group-item-action'
                key={blog.id}
              >
                <div className='card-body '>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-12 mt-3'>
                        <div className='card'>
                          <div className='card-horizontal'>
                            {/* <div className='img-square-wrapper col-3'>
                              <img
                                src={images[index]}
                                className='d-block w-100'
                                style={{ height: 200 }}
                                alt='menue item'
                              ></img>
                            </div> */}
                            <div className='card-body rounded'>
                              <h5 className='card-title'>{blog.name}</h5>
                              <p className='card-text'>{blog.description}</p>
                            </div>
                          </div>
                          <a
                            href={blog.html_url}
                            target='_blank'
                            className='card-link stretched-link'
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export default GitHubRepos;
