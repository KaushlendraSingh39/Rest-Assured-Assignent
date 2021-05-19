package pojo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class Comments {
    private int postId;
    private int id;
    private String name;
    private String email;
    private String body;

}
