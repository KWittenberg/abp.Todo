using Todo.Services;
using Todo.Services.Dtos;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Todo.Pages;

public class IndexModel : AbpPageModel
{
    public List<TodoItemDto> TodoItems { get; set; }

    private readonly TodoService _todoService;

    public IndexModel(TodoService todoService)
    {
        _todoService = todoService;
    }

    public async Task OnGetAsync()
    {
        TodoItems = await _todoService.GetListAsync();
    }
}