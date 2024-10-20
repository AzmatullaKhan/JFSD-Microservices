package com.klu.controller;

import com.klu.model.ImageEntity;
import com.klu.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = "http://localhost:3000") 
public class ImageController {

    @Autowired
    private ImageService imageService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadImages(
            @RequestParam("data1") MultipartFile data1,
            @RequestParam("data2") MultipartFile data2,
            @RequestParam("data3") MultipartFile data3,
            @RequestParam("data4") MultipartFile data4,
            @RequestParam("data5") MultipartFile data5,
            @RequestParam("name") String name,
            @RequestParam("cost") String cost,
            @RequestParam("materialused") String materialused,
            @RequestParam("description") String description,
            @RequestParam("publisher") String publisher
            ) {

        try {
            ImageEntity savedImage = imageService.saveImages(data1, data2, data3, data4, data5, name, cost, materialused, description, publisher);
            return new ResponseEntity<>(savedImage, HttpStatus.CREATED);
        } catch (IOException e) {
            return new ResponseEntity<>("Error while saving images: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<String>> getImage(@PathVariable Long id) {
        ImageEntity imageEntity = imageService.getImageById(id);
        if (imageEntity != null) {
            List<String> imageBase64List = new ArrayList<>();

            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData1()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData2()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData3()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData4()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData5()));

            return new ResponseEntity<>(imageBase64List, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<ImageDetailsResponse>> getAllImages() {
        List<ImageEntity> imageEntities = imageService.getAllImages();
        
        if (imageEntities.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        List<ImageDetailsResponse> allImageDetails = new ArrayList<>();

        for (ImageEntity imageEntity : imageEntities) {
            List<String> imageBase64List = new ArrayList<>();
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData1()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData2()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData3()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData4()));
            imageBase64List.add("data:image/png;base64," + Base64.getEncoder().encodeToString(imageEntity.getData5()));

            ImageDetailsResponse imageDetails = new ImageDetailsResponse(
                    imageEntity.getId(),
                    imageBase64List,
                    imageEntity.getName(),
                    imageEntity.getType(),
                    imageEntity.getCost(),
                    imageEntity.getMaterialused(),
                    imageEntity.getDescription(),
                    imageEntity.getPublisher()
            );

            allImageDetails.add(imageDetails);
        }
        
        return new ResponseEntity<>(allImageDetails, HttpStatus.OK);
    }
}

