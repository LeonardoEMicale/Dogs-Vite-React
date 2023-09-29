const validate = (dogs) => {
  let regexURLImage = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  const errors = {};
  if (!dogs.name || dogs.name.trim().length === 0) {
    errors.name = "Name is required";
  } else if (dogs.name.length > 10) {
    errors.name = "Name must be between 1 and 10 characters";
  }
  if (!dogs.minHeight) {
    errors.minHeight = "minHeight is required";
  } else if (dogs.minHeight < 1 || dogs.minHeight > 150) {
    errors.minHeight = "minHeight must be between 1 and 150";
  }
  if (!dogs.maxHeight) {
    errors.maxHeight = "maxHeight is required";
  } else if (dogs.maxHeight < 1 || dogs.maxHeight > 150) {
    errors.maxHeight = "maxHeight must be between 1 and 150";
  } else if (dogs.maxHeight < dogs.minHeight) {
    errors.maxHeight = "maxHeight cannot be less than minHeight";
  }
  if (!dogs.minWeight) {
    errors.minWeight = "minWeight is required";
  } else if (dogs.minWeight < 1 || dogs.minWeight > 82) {
    errors.minWeight = "minWeight must be between 1 and 82";
  }
  if (!dogs.maxWeight) {
    errors.maxWeight = "maxWeight is required";
  } else if (dogs.maxWeight < 1 || dogs.maxWeight > 82) {
    errors.maxWeight = "maxWeight must be between 1 and 82";
  } else if (dogs.maxWeight < dogs.minWeight) {
    errors.maxWeight = "maxWeight cannot be less than minWeight";
  }
  if (!dogs.life_span) {
    errors.life_span = "life_span is required";
  } else if (dogs.life_span < 1 || dogs.life_span > 20) {
    errors.life_span = "life_span must be between 1 and 20";
  }
  if (!dogs.image || !regexURLImage.test(dogs.image)) {
    errors.image = "Image URL is required";
  }

  return errors;
};
export default validate;
