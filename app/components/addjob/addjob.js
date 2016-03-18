import React from 'react'

  function AddJobComponent(props){

      return (
        <div >
          <h1>Add Job</h1>
          <form
           onSubmit={props.handleSubmit}
            className='job-form'>
            <label htmlFor='title'>Job title: </label>
            <input type='text' id='title' /><br />
            <label htmlFor='company'>Company: </label>
            <input type='text-area' id='company' /><br />
            <label htmlFor='location'>Location: </label>
            <input type='text' id='location' /><br />
            <label htmlFor='type'>Type: </label>
            <select id='type' defaultValue='Full Time'>
              <option value='Full Time'>Full Time</option>
              <option value='Part Time'>Part Time</option>
              <option value='Temporary'>Temporary</option>
            </select><br />
            <label htmlFor='description'>Description: </label>
            <input type='text-area' id='description' /><br />
            <label htmlFor='how-to-apply'>Application URL: </label>
            <input type='url' id='how-to-apply' /><br />
            <label htmlFor='url'>URL: </label>
            <input type='url' id='url' /><br />
            <button type="submit">click</button>
          </form>
        </div>
      )
    }

export default AddJobComponent;
