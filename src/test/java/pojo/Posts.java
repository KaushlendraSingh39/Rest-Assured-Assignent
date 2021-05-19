package pojo;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class Posts {
    private int userId;
    private int id;
    private String title;
    private String body;

}
