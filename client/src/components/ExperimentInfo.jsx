import React, { useState } from 'react';
import EditExperiment from "./EditExperiment";
import ExposuresChart from './ExposuresChart';
import ExperimentResults from './ExperimentResults';

const ExperimentInfo = ({ data, allMetrics }) => {
  const { id, name, description, duration, date_started, date_ended, metrics } = data;
  const [isEditing, setIsEditing] = useState(false);
  const startDate = new Date(date_started).toLocaleDateString("en-US");
  const endDate = date_ended ? new Date(date_ended).toLocaleDateString("en-US") : "Present";
  const metricsNames = metrics.map((metric) => {
    return allMetrics.find(m => m.id === metric.metric_id).name
  }).join(", ");


  return (
    <div className="border border-dashed border-primary-oxfordblue rounded p-5 my-4">
      {!isEditing ? (
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-primary-violet text-lg">Experiment from {startDate} to {endDate}</h2>
            {!date_ended && <button className="bg-primary-turquoise text-primary-offwhite rounded-lg py-1.5 px-6 ml-2" type="button" onClick={() => setIsEditing(true)}>Edit Experiment</button>}
          </div>
          <p>ID: <span className="font-bold">{id}</span></p>
          {name && <p>Name: <span className="font-bold">{name}</span></p>}
          <p>Duration: <span className="font-bold">{duration + " days"}</span></p>
          {description && <p>Description: <span className="font-bold">{description}</span></p>}
          <p>Metrics measured: <span className="font-bold">{metricsNames}</span></p>
          <ExposuresChart id={id} />
          <ExperimentResults id={id} />
        </div>
      ) : (
        <EditExperiment setIsEditing={setIsEditing} allMetrics={allMetrics} {...data}/>
      )}
    </div>
  );
};

export default ExperimentInfo;
