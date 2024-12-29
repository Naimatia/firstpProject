document.addEventListener("DOMContentLoaded", () => {
  const startWorkButton = document.getElementById("startWorkButton");
  const popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
  const images = document.querySelectorAll(".row img");

  // Show initial popup modal
  startWorkButton.addEventListener("click", () => {
    popupModal.show();
  });

  // Add click event to each image
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const targetModalId = image.getAttribute("data-target");
      const targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      );
      targetModal.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal1")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#shareButton");

  buttons.forEach((createButton) => {
    createButton.addEventListener("click", () => {
      const currentModal = bootstrap.Modal.getInstance(
        document.getElementById("modal7")
      );
      currentModal.hide();
      const targetModalId = createButton.getAttribute("data-target");
      const targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      );
      targetModal.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("unlimitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("limitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("limitedButton2");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal10")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("unlimitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("sosButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal4")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel5");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal5")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel15");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal15")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel6");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal6")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel16");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal16")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("systemButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal14")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToModal9");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal9")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("eventButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal5")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createSOSButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal6")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal1")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMain");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrLimited");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal10")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonTolimitedFrFinal");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal11")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrunlimited");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal12")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel3");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal3")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToModal7");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal8")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel13");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal13")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel4");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal4")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel14");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal14")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createSystemButtonFromModal12");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal12")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel17");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal17")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createSystemButtonFromModal11");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal11")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#backButtonToModal1");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const imageCounter = document.getElementById("imageCounter");

  // Function to update the image count
  function updateImageCount(count) {
    imageCounter.textContent = count;
  }

  buttons.forEach((createButton) => {
    createButton.addEventListener("click", () => {
      // Before navigating to another modal, update the image count
      const currentThumbnails = thumbnailContainer.querySelectorAll("img");
      updateImageCount(currentThumbnails.length);

      // Hide the current modal (modal7)
      const currentModal = bootstrap.Modal.getInstance(
        document.getElementById("modal7")
      );
      currentModal.hide();

      // Show the target modal
      const targetModalId = createButton.getAttribute("data-target");
      const targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      );
      targetModal.show();
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#createSurveyInfo");

  buttons.forEach((createButton) => {
    createButton.addEventListener("click", () => {
      const currentModal = bootstrap.Modal.getInstance(
        document.getElementById("modal3")
      );
      currentModal.hide();
      const targetModalId = createButton.getAttribute("data-target");
      const targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      );
      targetModal.show();
    });
  });
});


/*********************************    Tache 1 *********************************************/
document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButton");
  const previewContainerWrapper = document.getElementById("previewContainerWrapper");
  const modal1 = document.getElementById("modal1");
  const modal7 = document.getElementById("modal7");
  const mainImage = document.getElementById("mainImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");
  const imageCounter = document.getElementById("imageCounter");
  const deleteButton = document.getElementById("deleteButton");

  const MAX_IMAGES = 5;
  const DEFAULT_IMAGE = "assets/second-svg-dialog/image%201425.svg"; // Default image when no images are available

  let thumbnails = []; // Array to store the image sources

  // Validate the file
  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      return callback(false, null);
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Resize the image if it exceeds the maximum dimensions
        if (img.width > 350 || img.height > 812) {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          
          // Calculate the new dimensions while preserving the aspect ratio
          const ratio = Math.min(350 / img.width, 812 / img.height);
          const newWidth = img.width * ratio;
          const newHeight = img.height * ratio;
          
          canvas.width = newWidth;
          canvas.height = newHeight;

          // Draw the resized image onto the canvas
          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          // Get the resized image as a data URL
          const resizedDataUrl = canvas.toDataURL(file.type);

          callback(true, resizedDataUrl); // Pass the resized image to the callback
        } else {
          callback(true, e.target.result); // No resizing needed
        }
      };

      img.src = e.target.result;
    };

    reader.onerror = () => {
      callback(false, null);
    };

    reader.readAsDataURL(file);
  }

  // Handle file input
  function handleFileInput(inputElement) {
    inputElement.addEventListener("change", async (event) => {
      const files = event.target.files;
      const currentThumbnails = thumbnailContainer.querySelectorAll("img");
      if (currentThumbnails.length + files.length > MAX_IMAGES) {
        alert(`You can only upload a maximum of ${MAX_IMAGES} images.`);
        event.preventDefault(); // Prevent the file input action from proceeding
        return; // Exit the function if the limit is exceeded
      }

      for (const file of files) {
        if (file) {
          validateFile(file, (isValid, fileSrc) => {
            if (isValid) {
              // Add the first image as the main image
              if (currentThumbnails.length === 0) {
                mainImage.src = fileSrc;
              }

              // Create a thumbnail and append it to the container
              const thumbnail = document.createElement("img");
              thumbnail.src = fileSrc;
              thumbnail.classList.add("img-thumbnail");
              thumbnail.style.width = "45px";
              thumbnail.style.height = "45px";
              thumbnail.style.cursor = "pointer";
              thumbnail.style.objectFit = "cover";
              thumbnail.style.padding = "0";
              thumbnail.alt = `Thumbnail ${currentThumbnails.length + 1}`;
              thumbnail.addEventListener("click", () => changeMainImage(fileSrc));

              thumbnailContainer.appendChild(thumbnail);

              // Update the image count
              updateImageCount(thumbnailContainer.children.length);
              thumbnails.push(fileSrc); // Add the image source to the array
            }
          });
        }
      }

      // Hide modal1 and show modal7
      const modal1Instance = bootstrap.Modal.getInstance(modal1);
      modal1Instance.hide();

      const modal7Instance = new bootstrap.Modal(modal7);
      modal7Instance.show();
    });
  }

  // Change the main image
  function changeMainImage(src) {
    mainImage.src = src;
  }

  // Update the image count
  function updateImageCount(count) {
    imageCounter.textContent = count;
  }

  // Delete the main image
  deleteButton.addEventListener("click", () => {
    const currentThumbnails = Array.from(thumbnailContainer.querySelectorAll("img"));
    const currentMainImageSrc = mainImage.src;

    // Find the index of the current main image in the thumbnails
    const currentIndex = thumbnails.findIndex((src) => src === currentMainImageSrc);

    if (currentIndex !== -1) {
      // Remove the current thumbnail and image source from the array
      thumbnails.splice(currentIndex, 1);
      currentThumbnails[currentIndex].remove(); // Remove the thumbnail from the DOM

      // Check if there are any thumbnails left
      if (thumbnails.length > 0) {
        // If there are still thumbnails, update the main image to the next available thumbnail
        let nextIndex = (currentIndex === thumbnails.length) ? currentIndex - 1 : currentIndex;
        mainImage.src = thumbnails[nextIndex]; // Set the new main image
      } else {
        // If no images remain, set to the default image
        mainImage.src = DEFAULT_IMAGE;
      }

      // Update the image count
      updateImageCount(thumbnails.length);
    } else {
      alert("No main image to delete.");
    }
  });

  // Attach file input handler
  const fileInputs = document.querySelectorAll(".fileInput");
  fileInputs.forEach((fileInput) => {
    fileInput.setAttribute("multiple", "true"); // Allow multiple file selection
    handleFileInput(fileInput);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButtonModel2");
  const previewContainerWrapperModel2 = document.getElementById(
    "previewContainerWrapperModel2"
  );

  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, JPG, or PNG files are allowed.");
      return callback(false);
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith("image")) {
        img.onload = () => {
          if (img.width <= 350 && img.height <= 812) {
            callback(true);
          } else {
            alert("Image dimensions must be 350x812 pixels or smaller.");
            callback(false);
          }
        };
        img.src = e.target.result;
      } else {
        callback(true);
      }
    };

    reader.onerror = () => {
      alert("Error loading the file.");
      callback(false);
    };

    reader.readAsDataURL(file);
  }

  function handleFileInput(inputElement) {
    inputElement.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);

      // Check if more than 5 images are being uploaded
      if (previewContainerWrapperModel2.children.length + files.length > 6) {
        alert("You can only upload a maximum of 5 images.");
        inputElement.value = "";
        return;
      }

      files.forEach((file) => {
        validateFile(file, (isValid) => {
          if (isValid) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // Create new preview container for the new image
              const newPreviewContainer = document.createElement("div");
              newPreviewContainer.classList.add("previewContainerModel2");
              newPreviewContainer.style =
                "height: 100px; width: 80px; display: flex; justify-content: center; align-items: center; background: url(" +
                e.target.result +
                ") no-repeat center center; background-size: contain; cursor: pointer; border-radius: 10px;";

              // Create file input inside the new preview container
              const input = document.createElement("input");
              input.type = "file";
              input.classList.add("fileInput");
              input.style =
                "opacity: 0; width: 100%; height: 20px; cursor: pointer; ;";

              // Append input to the new preview container
              newPreviewContainer.appendChild(input);

              // Append the new preview container to the wrapper
              previewContainerWrapperModel2.appendChild(newPreviewContainer);

              // Apply the handler for new file inputs
              handleFileInput(input);

              // Check if 5 images are uploaded and hide addImageButton
              if (previewContainerWrapperModel2.children.length >= 5) {
                addImageButton.style.display = "none";
              }
            };
            reader.readAsDataURL(file);
          } else {
            inputElement.value = "";
          }
        });
      });

      // Toggle the visibility of addImageButton based on the number of images in previewContainerWrapperModel2
      if (previewContainerWrapperModel2.children.length === 0) {
        addImageButton.style.display = "block";
      } else {
        addImageButton.style.display = "none";
      }
    });
  }

  // Apply to all preview containers
  const fileInputs = document.querySelectorAll(".fileInputModel2");
  fileInputs.forEach((input) => {
    handleFileInput(input);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButtonModel10");
  const previewContainerWrapperModel3 = document.getElementById(
    "previewContainerWrapperModel10"
  );

  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, JPG, or PNG files are allowed.");
      return callback(false);
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith("image")) {
        img.onload = () => {
          if (img.width <= 350 && img.height <= 812) {
            callback(true);
          } else {
            alert("Image dimensions must be 350x812 pixels or smaller.");
            callback(false);
          }
        };
        img.src = e.target.result;
      } else {
        callback(true);
      }
    };

    reader.onerror = () => {
      alert("Error loading the file.");
      callback(false);
    };

    reader.readAsDataURL(file);
  }

  function handleFileInput(inputElement) {
    inputElement.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);

      // Check if more than 5 images are being uploaded
      if (previewContainerWrapperModel10.children.length + files.length > 6) {
        alert("You can only upload a maximum of 5 images.");
        inputElement.value = "";
        return;
      }

      files.forEach((file) => {
        validateFile(file, (isValid) => {
          if (isValid) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // Create new preview container for the new image
              const newPreviewContainer = document.createElement("div");
              newPreviewContainer.classList.add("previewContainerModel10");
              newPreviewContainer.style =
                "height: 100px; width: 80px; display: flex; justify-content: center; align-items: center; background: url(" +
                e.target.result +
                ") no-repeat center center; background-size: contain; cursor: pointer; border-radius: 10px;";

              // Create file input inside the new preview container
              const input = document.createElement("input");
              input.type = "file";
              input.classList.add("fileInput");
              input.style =
                "opacity: 0; width: 100%; height: 20px; cursor: pointer; ;";

              // Append input to the new preview container
              newPreviewContainer.appendChild(input);

              // Append the new preview container to the wrapper
              previewContainerWrapperModel10.appendChild(newPreviewContainer);

              // Apply the handler for new file inputs
              handleFileInput(input);

              // Check if 5 images are uploaded and hide addImageButton
              if (previewContainerWrapperModel10.children.length >= 5) {
                addImageButton.style.display = "none";
              }
            };
            reader.readAsDataURL(file);
          } else {
            inputElement.value = "";
          }
        });
      });

      // Toggle the visibility of addImageButton based on the number of images in previewContainerWrapperModel10
      if (previewContainerWrapperModel10.children.length === 0) {
        addImageButton.style.display = "block";
      } else {
        addImageButton.style.display = "none";
      }
    });
  }

  // Apply to all preview containers
  const fileInputs = document.querySelectorAll(".fileInput2");
  fileInputs.forEach((input) => {
    handleFileInput(input);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButtonModel3");
  const previewContainerWrapperModel3 = document.getElementById(
    "previewContainerWrapperModel3"
  );

  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, JPG, or PNG files are allowed.");
      return callback(false);
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith("image")) {
        img.onload = () => {
          if (img.width <= 350 && img.height <= 812) {
            callback(true);
          } else {
            alert("Image dimensions must be 350x812 pixels or smaller.");
            callback(false);
          }
        };
        img.src = e.target.result;
      } else {
        callback(true);
      }
    };

    reader.onerror = () => {
      alert("Error loading the file.");
      callback(false);
    };

    reader.readAsDataURL(file);
  }

  function handleFileInput(inputElement) {
    inputElement.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);

      // Check if more than 5 images are being uploaded
      if (previewContainerWrapperModel3.children.length + files.length > 6) {
        alert("You can only upload a maximum of 5 images.");
        inputElement.value = "";
        return;
      }

      files.forEach((file) => {
        validateFile(file, (isValid) => {
          if (isValid) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // Create new preview container for the new image
              const newPreviewContainer = document.createElement("div");
              newPreviewContainer.classList.add("previewContainerModel3");
              newPreviewContainer.style =
                "height: 100px; width: 80px; display: flex; justify-content: center; align-items: center; background: url(" +
                e.target.result +
                ") no-repeat center center; background-size: contain; cursor: pointer; border-radius: 10px;";

              // Create file input inside the new preview container
              const input = document.createElement("input");
              input.type = "file";
              input.classList.add("fileInput");
              input.style =
                "opacity: 0; width: 100%; height: 20px; cursor: pointer; ;";

              // Append input to the new preview container
              newPreviewContainer.appendChild(input);

              // Append the new preview container to the wrapper
              previewContainerWrapperModel3.appendChild(newPreviewContainer);

              // Apply the handler for new file inputs
              handleFileInput(input);

              // Check if 5 images are uploaded and hide addImageButton
              if (previewContainerWrapperModel3.children.length >= 5) {
                addImageButton.style.display = "none";
              }
            };
            reader.readAsDataURL(file);
          } else {
            inputElement.value = "";
          }
        });
      });

      // Toggle the visibility of addImageButton based on the number of images in previewContainerWrapperModel3
      if (previewContainerWrapperModel3.children.length === 0) {
        addImageButton.style.display = "block";
      } else {
        addImageButton.style.display = "none";
      }
    });
  }

  // Apply to all preview containers
  const fileInputs = document.querySelectorAll(".fileInput3");
  fileInputs.forEach((input) => {
    handleFileInput(input);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButtonModel4");
  const previewContainerWrapperModel4 = document.getElementById(
    "previewContainerWrapperModel4"
  );

  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, JPG, or PNG files are allowed.");
      return callback(false);
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith("image")) {
        img.onload = () => {
          if (img.width <= 350 && img.height <= 812) {
            callback(true);
          } else {
            alert("Image dimensions must be 350x812 pixels or smaller.");
            callback(false);
          }
        };
        img.src = e.target.result;
      } else {
        callback(true);
      }
    };

    reader.onerror = () => {
      alert("Error loading the file.");
      callback(false);
    };

    reader.readAsDataURL(file);
  }

 

  // Apply to all preview containers
  const fileInputs = document.querySelectorAll(".fileInput");
  fileInputs.forEach((input) => {
    handleFileInput(input);
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const addImageButton = document.getElementById("addImageButtonModel6");
  const previewContainerWrapperModel6 = document.getElementById(
    "previewContainerWrapperModel6"
  );

  function validateFile(file, callback) {
    const allowedTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!allowedTypes.includes(file.type)) {
      alert("Only MP4, JPG, or PNG files are allowed.");
      return callback(false);
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      if (file.type.startsWith("image")) {
        img.onload = () => {
          if (img.width <= 350 && img.height <= 812) {
            callback(true);
          } else {
            alert("Image dimensions must be 350x812 pixels or smaller.");
            callback(false);
          }
        };
        img.src = e.target.result;
      } else {
        callback(true);
      }
    };

    reader.onerror = () => {
      alert("Error loading the file.");
      callback(false);
    };

    reader.readAsDataURL(file);
  }

  function handleFileInput(inputElement) {
    inputElement.addEventListener("change", (event) => {
      const files = Array.from(event.target.files);

      // Check if more than 5 images are being uploaded
      if (previewContainerWrapperModel6.children.length + files.length > 6) {
        alert("You can only upload a maximum of 5 images.");
        inputElement.value = "";
        return;
      }

      files.forEach((file) => {
        validateFile(file, (isValid) => {
          if (isValid) {
            const reader = new FileReader();
            reader.onload = (e) => {
              // Create new preview container for the new image
              const newPreviewContainer = document.createElement("div");
              newPreviewContainer.classList.add("previewContainerModel6");
              newPreviewContainer.style =
                "height: 100px; width: 80px; display: flex; justify-content: center; align-items: center; background: url(" +
                e.target.result +
                ") no-repeat center center; background-size: contain; cursor: pointer; border-radius: 10px;";

              // Create file input inside the new preview container
              const input = document.createElement("input");
              input.type = "file";
              input.classList.add("fileInput");
              input.style =
                "opacity: 0; width: 100%; height: 20px; cursor: pointer; ;";

              // Append input to the new preview container
              newPreviewContainer.appendChild(input);

              // Append the new preview container to the wrapper
              previewContainerWrapperModel6.appendChild(newPreviewContainer);

              // Apply the handler for new file inputs
              handleFileInput(input);

              // Check if 5 images are uploaded and hide addImageButton
              if (previewContainerWrapperModel6.children.length >= 5) {
                addImageButton.style.display = "none";
              }
            };
            reader.readAsDataURL(file);
          } else {
            inputElement.value = "";
          }
        });
      });

      // Toggle the visibility of addImageButton based on the number of images in previewContainerWrapperModel6
      if (previewContainerWrapperModel6.children.length === 0) {
        addImageButton.style.display = "block";
      } else {
        addImageButton.style.display = "none";
      }
    });
  }

  // Apply to all preview containers
  const fileInputs = document.querySelectorAll(".fileInput");
  fileInputs.forEach((input) => {
    handleFileInput(input);
  });
});



function changeMainImage(src) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = src;
}
