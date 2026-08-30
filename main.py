import pygame
import sys
import math

pygame.init()

# Screen settings
WIDTH, HEIGHT = 1000, 700
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Tree Photo Collection")

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

clock = pygame.time.Clock()

# Heart settings
points = []
scale = 15

# Create heart points
for i in range(0, 360):
    t = math.radians(i)

    x = 16 * math.sin(t) ** 3
    y = (
        13 * math.cos(t)
        - 5 * math.cos(2 * t)
        - 2 * math.cos(3 * t)
        - math.cos(4 * t)
    )

    # Convert mathematical coordinates to screen coordinates
    x = WIDTH // 2 + x * scale
    y = HEIGHT // 2 - y * scale

    points.append((x, y))

running = True
draw_index = 0

while running:
    screen.fill(BLACK)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Draw heart gradually
    if draw_index >= 2:
        pygame.draw.lines(
            screen,
            WHITE,
            False,
            points[:draw_index],
            3
        )

    if draw_index < len(points):
        draw_index += 2
    else:
        pygame.draw.lines(
            screen,
            WHITE,
            True,
            points,
            3
        )

    pygame.display.update()
    clock.tick(60)

pygame.quit()
sys.exit()