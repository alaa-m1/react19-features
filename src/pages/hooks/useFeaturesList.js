const useFeaturesList = (features) => {
  const featuresList = Object.entries(features).map(
    (feature, index) => ({
      id: index,
      label: feature[0],
      component: feature[1],
    })
  );
  return featuresList;
};

export default useFeaturesList;
